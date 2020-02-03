import React, { useState } from 'react'

// react-i18n
import { useTranslation } from 'react-i18next'

// components
import Title from '../../../components/shared/Title'

// shared
import Input from '../../../components/shared/Input'
import Button from '../../../components/shared/Button'
import ButtonLink from '../../../components/shared/ButtonLink'
import RadioGroup from '../../../components/shared/RadioGroup'
import Radio from '../../../components/shared/Radio'
import ButtonIcon from '../../../components/shared/ButtonIcon'

// Icons
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg'

// styles
import {
  Content,
  Form,
  Footer,
  SubCategories,
  PageTitle,
  ButtonTitle,
  Table,
  TableHeader,
  CardList,
  Card,
  InputContainer
} from './styles'

// apollo client
import { useMutation } from '@apollo/react-hooks'

// graphql
import { CREATE_CATEGORY } from '../../../graphql/mutations/category'

export default ({ history }) => {
  const { t } = useTranslation()
  const [category, setCategory] = useState({ name: '', subCategories: [] })
  const [subCategoryName, setSubCategoryName] = useState('')
  const [subCategoryType, setSubCategoryType] = useState('')

  const [createCategory] = useMutation(CREATE_CATEGORY,
    {
      onCompleted: () => {
        history.push('/category')
      },
      refetchQueries: ['GET_ALL_CATEGORIES']
    })

  const options = [
    { label: t('category.form.options.recipe'), value: 'R' },
    { label: t('category.form.options.expense'), value: 'D' }
  ]

  return (
    <Content>
      <Title
        title={t('category.form.title')}
      />
      <Form>
        <Input
          required={true}
          label={t('category.form.name')}
          value={category.name}
          onChange={({ target: { value } }) => setCategory({ ...category, name: value })}
        />
        <SubCategories>
          <PageTitle>{t('category.form.subCategories')}</PageTitle>
          <InputContainer>
            <Input
              label={t('category.form.description')}
              placeholder={t('category.form.description')}
              value={subCategoryName}
              onChange={({ target: { value } }) => setSubCategoryName(value)}
            />
            <RadioGroup
              label={t('category.form.typeCategory')}
            >
              {options.map(({ label, value }) => (
                <Radio
                  label={label}
                  value={value}
                  onClick={() => setSubCategoryType(value)}
                />
              ))}
            </RadioGroup>
            <ButtonIcon
              onClick={() => {
                setCategory({
                  ...category,
                  subCategories: [
                    ...category.subCategories,
                    {
                      _id: category.subCategories.length + 1,
                      description: subCategoryName,
                      typeValue: subCategoryType
                    }
                  ]
                })

                setSubCategoryName('')
                setSubCategoryType('R')
              }}
            />
          </InputContainer>
        </SubCategories>
        <Table>
          <TableHeader>
            <span>{t('category.form.description')}</span>
            <span>{t('category.form.typeCategory')}</span>
          </TableHeader>
          <CardList>
            {category.subCategories.map(({ _id, description, typeValue }) => (
              <Card key={_id}>
                <span>{description}</span>
                <span>{(typeValue === 'D' && 'Despesa') || (typeValue === 'R' && 'Receita')}</span>
                <div>
                  <Delete
                    onClick={() => setCategory({
                      ...category,
                      subCategories: category.subCategories.filter((subCategory) => subCategory._id !== _id)
                    })}
                  />
                </div>
              </Card>
            ))}
          </CardList>
        </Table>
      </Form>
      <Footer>
        <Button
          width='64px'
          onClick={() => {
            createCategory({
              variables: {
                name: category.name,
                subCategories: category.subCategories.map(({ description, typeValue }) => ({ description, typeValue }))
              }
            })
          }}
        >
          {t('category.form.buttonSave')}
        </Button>
        <ButtonLink
          onClick={() => history.push('/category')}
        >
          {t('category.form.buttonCancel')}
        </ButtonLink>
      </Footer>
    </Content>
  )
}