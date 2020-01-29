import React from 'react'

// react-i18n
import { useTranslation } from 'react-i18next'

// components
import PageHeader from '../../../components/shared/PageHeader'


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
  InputContainer,
  SelectOptions
} from './styles'


export default () => {
  const { t } = useTranslation()

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
        <Input label={t('category.form.name')} />
        <SubCategories>
          <SubTitle>
            <PageTitle>{t('category.form.subCategories')}</PageTitle>

          </SubTitle>
          <InputContainer>
            <Input
              height='24px'
              placeholder={t('category.form.name')}
            />
            <SelectOptions
              options={options}
              placeholder={t('category.form.typeCategory')}
            />
            <ButtonTitle>New</ButtonTitle>
          </InputContainer>
          <Table>
            <TableHeader>
              <span>{t('category.table.name')}</span>
              <span>{t('category.table.totalSub')}</span>
            </TableHeader>
            <CardList>
              <Card>
                <span>Cinema</span>
                <span>Despesa</span>
                <div>
                  <Delete />
                </div>
              </Card>
              <Card>
                <span>Show</span>
                <span>Despesa</span>
                <div>
                  <Delete />
                </div>
              </Card>
              <Card>
                <span>Praia</span>
                <span>Despesa</span>
                <div>
                  <Delete />
                </div>
              </Card>
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