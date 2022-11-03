import { MenuButtonContainer } from "../styles/components/menuButton";

type MenuButtonProps = {
    isOpen: boolean;
    toggleMenu: () => void;
}

export function MenuButton ({ isOpen, toggleMenu }: MenuButtonProps) {
    return (
        <MenuButtonContainer isOpen={isOpen ? 'open' : 'closed'} onClick={() => toggleMenu()}>
            <div />
            <div />
            <div />
        </MenuButtonContainer>
    )
}