import React, { useState, useEffect } from 'react'

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


export default () => {
  const { t } = useTranslation()
  const [category, setCategory] = useState({ name: '', subCategories: [] })
  const [subCategoryName, setSubCategoryName] = useState('')
  const [subCategoryType, setSubCategoryType] = useState('')

  const options = [
    { value: 'D', label: 'Despesa' },
    { value: 'R', label: 'Receita' }
  ]

  useEffect(() => {
    console.log(category)
  }, [category])

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
                setSubCategoryType('D')
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
                <Card>
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
          <Button width='64px'>{t('category.form.buttonSave')}</Button>
          <ButtonLink>{t('category.form.buttonCancel')}</ButtonLink>
        </Footer>
      </Form>
    </Content>
  )
}