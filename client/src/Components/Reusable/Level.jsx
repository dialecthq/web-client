import React from 'react'
import styled from 'styled-components'
import {Tooltip} from 'antd'

const levelToText = {
    1: 'A1',
    2: 'A2',
    3: 'B1',
    4: 'B2',
    5: 'C1',
    6: 'C2',
    7: 'Native',
}

const LevelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const LevelIndicator = styled.div`
    width: 8px;
    height: 20px;
    border-radius: 10px;
    background: ${p => p.active ? '#57c6ff' : '#efefef'};
    border: ${p => p.active ? 'none' : '1px solid #d4d4d4'};
    margin-right: 2px;


    `

const Level = ({level}) => {
    return (
        <Tooltip title={levelToText[level]}>
            <LevelContainer>
                <LevelIndicator active={level >= 1}/>
                <LevelIndicator active={level >= 2}/>
                <LevelIndicator active={level >= 3}/>
                <LevelIndicator active={level >= 4}/>
                <LevelIndicator active={level >= 5}/>
                <LevelIndicator active={level >= 6}/>
            </LevelContainer>
        </Tooltip>
    )
}

export default Level