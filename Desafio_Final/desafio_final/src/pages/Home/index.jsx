import './styles.css';
import '../../styles/global.css';

import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ButtonText } from '../../components/ButtonText'; 
import { Input } from '../../components/Input';

import { HeartStraight } from "phosphor-react";


export function Home() {
    return (
      <main>
        <Button text="Minhas notas" />
        <ButtonText text="Minhas notas" /> 
        <Input 
                title="Search" 
                placeholder="Search here..." 
            />
         
        <ButtonIcon icon={HeartStraight }></ButtonIcon>
      </main>
    );
}
