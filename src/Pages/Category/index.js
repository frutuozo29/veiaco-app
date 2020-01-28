import React, { useEffect } from 'react'

// apollo client
import { useQuery } from '@apollo/react-hooks'

// query
import { GET_ALL_CATEGORIES } from '../../graphql/queries/category'

// components
import PageHeader from '../../components/shared/PageHeader'
import Loading from '../../components/shared/Loading'

// toastify
import { toast } from 'react-toastify'

// styles
import { Content, Table, TableHeader, CardList, Card } from './styles'

// icons 
import { ReactComponent as Edit } from '../../assets/icons/edit.svg'
import { ReactComponent as Delete } from '../../assets/icons/delete.svg'

// react-i18n
import { useTranslation } from 'react-i18next'

export default () => {
  const { t } = useTranslation()

  const { loading, error, data: { categories = [] } = {} } = useQuery(GET_ALL_CATEGORIES)

  useEffect(() => {
    if (error) {
      toast.error('Erro ao carregar os dados')
    }
  }, [error])

  return (
    <Content>
      <PageHeader
        title={t('category.title')}
        to='/Category/Form'
      />
      <Table>
        <TableHeader>
          <span>{t('category.table.description')}</span>
          <span>{t('category.table.totalSub')}</span>
        </TableHeader>
        {loading ? (
          <Loading />
        ) : (
            <CardList>
              {categories.map(({ _id, description, subCategories }) => (
                <Card key={_id}>
                  <span>{description}</span>
                  <span>{subCategories.length}</span>
                  <div>
                    <Edit />
                    <Delete />
                  </div>
                </Card>
              ))}
            </CardList>
          )
        }
      </Table>

    </Content>
  )
}