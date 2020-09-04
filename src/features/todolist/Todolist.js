import React from 'react'
import { Button, List, Input, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { CustomRadio } from '../../components/CustomRadio'
import logo from '../../logo.svg';

/* first time i am using important in my life 😭 */
const ListWrapper = styled.div`
  .item.todo {
    display: flex !important;
    align-items: center !important;
  }

  .todo__btn {
    margin-left: auto !important; 
  }
`

const TodoList = () => {
  return (
    <ListWrapper>
      <List divided verticalAlign='middle' celled>
        <List.Item className="todo" style={{ display: 'flex', alignItems: 'center' }}>
          <List.Content>
            <Icon className='plus' />
            <Input transparent placeholder="Add a task" />
          </List.Content>
        </List.Item>
        <List.Item className="todo">
          <List.Content className="inline"><CustomRadio /><Input transparent /></List.Content>
          <List.Content floated='right' className="todo__btn">
            <Button icon='trash alternate outline'></Button>
          </List.Content>
        </List.Item>
      </List>
    </ListWrapper>
  )
}

export default TodoList