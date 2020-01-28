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
import { Content, Form, Footer, SubCategories, SubTitle, PageTitle, ButtonTitle, Table, TableHeader, CardList, Card } from './styles'


export default () => {
  const { t } = useTranslation()

  return (
    <Content>
      <PageHeader
        title={t('category.form.title_create')}
      />
      <Form>
        <Input label={'Description'} />
        <SubCategories>
          <SubTitle>
            <PageTitle>{'Sub Categories'}</PageTitle>
            <ButtonTitle>
              New
              </ButtonTitle>
          </SubTitle>
          <Table>
            <TableHeader>
              <span>{t('category.table.description')}</span>
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
          <Button>Create</Button>
          <ButtonLink>Cancel</ButtonLink>
        </Footer>
      </Form>
    </Content>
  )
}