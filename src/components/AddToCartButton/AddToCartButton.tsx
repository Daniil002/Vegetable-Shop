import style from './AddToCartButton.module.css'
import { Button } from "@mantine/core";
import { BsCart2 } from "react-icons/bs";

const AddToCartButton = ({onClick}: { onClick: () => void }) => {
    return (
        <Button
          variant="filled"
          size="xs"
          radius="md"
          className={style.cardAddButton}
          onClick={onClick}
          
        >
          В корзину <BsCart2 className={style.buttonImg} />
        </Button>
    )
}

export default AddToCartButton;