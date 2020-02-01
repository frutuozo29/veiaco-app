import React, { useState } from 'react'

// react-i18n
import { useTranslation } from 'react-i18next'

// components
import PageHeader from '../../../components/shared/PageHeader'
import Select from 'react-select'

// shared
import Input from '../../../components/shared/Input'
import Button from '../../../components/shared/Button'
import ButtonLink from '../../../components/shared/ButtonLink'


import { ReactComponent as Delete } from '../../../assets/icons/delete.svg'

// styles
import {
  Content,
  Form,
  Footer,
  SubCategories,
  SubTitle,
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
    { value: 'D', label: 'Despesa' },
    { value: 'R', label: 'Receita' }
  ]

  return (
    <Content>
      <PageHeader
        title={t('category.form.title')}
      />
      <Form>
        <Input
          label={t('category.form.name')}
          value={category.name}
          onChange={({ target: { value } }) => setCategory({ ...category, name: value })}
        />
        <SubCategories>
          <SubTitle>
            <PageTitle>{t('category.form.subCategories')}</PageTitle>
          </SubTitle>
          <InputContainer>
            <Input
              placeholder={t('category.form.description')}
              value={subCategoryName}
              onChange={({ target: { value } }) => setSubCategoryName(value)}
            />
            <Select
              options={options}
              selected={subCategoryType || ''}
              placeholder={t('category.form.typeCategory')}
              onChange={({ value }) => setSubCategoryType(value)}
            />
            <ButtonTitle
              onClick={(event) => {
                event.preventDefault()

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
                setSubCategoryType('')
              }}
            >
              New
            </ButtonTitle>
          </InputContainer>
          <Table>
            <TableHeader>
              <span>{t('category.table.name')}</span>
              <span>{t('category.table.totalSub')}</span>
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
        </SubCategories>
        <Footer>
          <Button
            width='64px'
            onClick={(e) => {
              e.preventDefault()

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
          <ButtonLink>{t('category.form.buttonCancel')}</ButtonLink>
        </Footer>
      </Form>
    </Content>
  )
}