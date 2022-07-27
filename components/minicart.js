import React, { Fragment } from 'react';
import { useContext } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import CartContext from '../context/cartContext';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function Minicart() {
    const cartContext = useContext(CartContext);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
      };
    
    const handleClickAway = () => {
        setOpen(false);
    };
    
    const buttonMinicart = (
        <Fragment>
            <Button className="material-icons" onClick={handleClick} color="inherit">shopping_bag</Button>
            <span className="minicart-pop">{cartContext.cart.reduce((count, curItem) => { return count + curItem.quantity }, 0)}</span>
        </Fragment>
    );

    const bodyMinicart = (
        <div className="minicart-body">
            {cartContext.cart.length <= 0 && <p>Carrello vuoto</p>}
            {cartContext.cart.map(cartItem => (
                <div className="minicart-product" key={cartItem.sku}>
                    <Image
                        src={cartItem.picture}
                        height={50}
                        width={50}
                        alt={`esempio-${cartItem.name}`}
                    />
                    <span className="minicart-text">{cartItem.name} <strong>({cartItem.quantity})</strong></span>
                </div>
            ))}
        </div>
    );

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="minicart">
                {buttonMinicart}
                { open ? ( bodyMinicart ) : null}
            </div>
        </ClickAwayListener>
    );
}