import React from 'react'
import { Button, List, Input, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { CustomRadio } from '../../components/CustomRadio'
import logo from '../../logo.svg';

/* first time i am using important in my life 😭 */
const ListWrapper = styled.div`
  .todolist .item.todo {
    display: flex !important;
    align-items: center !important;
  }

  .todolist .todo__btn {
    margin-left: auto !important; 
  }

  .todolist .todo__input {
    border-bottom: 0px deeppink;
    width: 1px;
    background: deeppink;
  }
  .todolist .todo__input:hover {
    border-bottom: 2px solid deeppink;
    width: 100px;
    transition: border-bottom .1s ease .1s, width ease .2s;
  }
`

const TodoList = () => {
  return (
    <ListWrapper>
      <List divided verticalAlign='middle' celled className="todolist">
        <List.Item className="todo" style={{ display: 'flex', alignItems: 'center' }}>
          <List.Content>
            <Icon className='plus' />
            <Input transparent placeholder="Add a task" />
          </List.Content>
        </List.Item>
        <List.Item className="todo">
          <List.Content className="inline"><Input transparent className="todo__input" /></List.Content>
          <List.Content floated='right' className="todo__btn">
            <Button icon='trash alternate outline'></Button>
          </List.Content>
        </List.Item>
      </List>
    </ListWrapper>
  )
}

export default TodoList