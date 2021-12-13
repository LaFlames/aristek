import React, {ChangeEvent, KeyboardEvent, useState} from "react";


export type AddItemPropsType = {
    addItem: (title: string) => void
    taskTitle: string
    name: string
    autoFocus?: boolean
}

export const AddItemForm = React.memo(({addItem, taskTitle, name, autoFocus}: AddItemPropsType) => {

    const [title, setTitle] = useState<string>(taskTitle)
    const [error, setError] = useState<boolean>(false)

    const addItemHandler = () => {
        if (title.trim() !== "") {
            addItem(title)
            setTitle("")
        } else {
            setError(true)
        }
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressAddItemHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if ((title.trim() !== "") && (e.charCode === 13)) {
            addItem(title)
            setTitle("")
        } else {
            setError(true)
        }
    }

    return (
        <div className={'addItemForm'}>
            <input
                value={title}
                onChange={onChangeTitleHandler}
                onKeyPress={onKeyPressAddItemHandler}
                className={error ? 'addItemForm_input addItemForm_inputError' : 'addItemForm_input'}
                placeholder="+ Add a task, press Enter to save"
                onBlur={onChangeTitleHandler}
                autoFocus={autoFocus}
            />
            <button
                onClick={addItemHandler}
                className={'addItemForm_btn'}
            >{name}</button>
        </div>
    )
})