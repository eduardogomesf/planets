import { BurgerContainer } from "../styles/components/burger";

type MenuButtonProps = {
    isOpen: boolean;
    toggleMenu: () => void;
}

export function Burger ({ isOpen, toggleMenu }: MenuButtonProps) {
    return (
        <BurgerContainer isOpen={isOpen ? 'open' : 'closed'} onClick={() => toggleMenu()}>
            <div />
            <div />
            <div />
        </BurgerContainer>
    )
}