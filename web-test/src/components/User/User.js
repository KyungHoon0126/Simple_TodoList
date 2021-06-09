import React from 'react'

const User = ({ user, onRemove }) => {
    const { idx, name, email } = user;

    return (
        <div>
            <div>
                <label>이름 : </label>
                {name}
            </div>

            <div>
                <label>이메일 : </label>
                {email}            
            </div>

            <button>수정</button>
            <button onClick={() => onRemove(idx)}>삭제</button>

            <br />
            <br />
        </div>
    )
}

export default User
