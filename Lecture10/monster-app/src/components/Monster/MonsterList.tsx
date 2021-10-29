import { FC, useContext } from 'react';
import { IMonster } from '../../interfaces/IMonster';
import MonsterItem from './MonsterItem';
import { MonsterContext } from '../../contexts/MonsterContext';
import { MonsterContextType } from '../../types/MonsterContextType';

const MonsterList: FC = () => {

    const {monsters} = useContext(MonsterContext) as MonsterContextType;

    return (
        <section>
            <h3>Monsterliste</h3>
        </section>
    )
}

export default MonsterList;