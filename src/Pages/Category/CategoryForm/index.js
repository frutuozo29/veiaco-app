import React from 'react'

// react-i18n
import { useTranslation } from 'react-i18next'

// components
import PageHeader from '../../../components/shared/PageHeader'

// shared
import Input from '../../../components/shared/Input'
import Button from '../../../components/shared/Button'
import ButtonLink from '../../../components/shared/ButtonLink'

// styles
import { Content, Form, Footer, SubCategories, SubTitle, PageTitle, ButtonTitle } from './styles'


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
        </SubCategories>
        <Footer>
          <Button>Criar</Button>
          <ButtonLink>Cancelar</ButtonLink>
        </Footer>
      </Form>
    </Content>
  )
}