import React, { useEffect } from 'react'

// apollo client
import { useQuery } from '@apollo/react-hooks'

// query
import { GET_ALL_CATEGORIES } from '../../graphql/queries/category'

// components
import Title from '../../components/shared/Title'
import Loading from '../../components/shared/Loading'
import ButtonIcon from '../../components/shared/ButtonIcon'

// toastify
import { toast } from 'react-toastify'

// styles
import { Content, Table, TableHeader, CardList, Card } from './styles'

// icons 
import { ReactComponent as Edit } from '../../assets/icons/edit.svg'
import { ReactComponent as Delete } from '../../assets/icons/delete.svg'

// react-i18n
import { useTranslation } from 'react-i18next'

export default ({ history }) => {
  const { t } = useTranslation()

  const { loading, error, data: { categories = [] } = {} } = useQuery(GET_ALL_CATEGORIES)

  useEffect(() => {
    if (error) {
      toast.error('Erro ao carregar os dados')
    }
  }, [error])

  return (
    <Content>
      <Title
        title={t('category.title')}
        subTitle='cadastro de categorias'
      />
      <Table>
        <TableHeader>
          <span>{t('category.table.name')}</span>
          <span>{t('category.table.totalSub')}</span>
        </TableHeader>
        {loading ? (
          <Loading />
        ) : (
            <CardList>
              {categories.map(({ _id, name, subCategories }) => (
                <Card key={_id}>
                  <span>{name}</span>
                  <span>{subCategories.length}</span>
                  <div>
                    <Edit />
                    <Delete />
                  </div>
                </Card>
              ))}
            </CardList>
          )}
      </Table>
      <ButtonIcon
        onClick={() => history.push('/category/form')}
      />
    </Content>
  )
}