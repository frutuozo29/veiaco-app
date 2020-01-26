import React from 'react'

// components
import PageHeader from '../../components/shared/PageHeader'

// styles
import { Content, Table, TableHeader, CardList, Card } from './styles'

// icons 
import { ReactComponent as Edit } from '../../assets/icons/edit.svg'
import { ReactComponent as Delete } from '../../assets/icons/delete.svg'

export default () => {

  return (
    <Content>
      <PageHeader
        title='Categories'
      />
      <Table>
        <TableHeader>
          <span>DESCRIPTION</span>
          <span>TOTAL SUB-CATEGORIES</span>
        </TableHeader>
        <CardList>
          <Card>
            <span>Alimentação</span>
            <span>3</span>
            <div>
              <Edit />
              <Delete />
            </div>
          </Card>
          <Card>
            <span>Lazer</span>
            <span>2</span>
            <div>
              <Edit />
              <Delete />
            </div>
          </Card>
          <Card>
            <span>Animal de Estimação</span>
            <span>4</span>
            <div>
              <Edit />
              <Delete />
            </div>
          </Card>
          <Card>
            <span>Salário Mensal</span>
            <span>2</span>
            <div>
              <Edit />
              <Delete />
            </div>
          </Card>
          <Card>
            <span>Transferência</span>
            <span>2</span>
            <div>
              <Edit />
              <Delete />
            </div>
          </Card>
        </CardList>
      </Table>

    </Content>
  )
}