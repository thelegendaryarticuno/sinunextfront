import React from 'react'
import { BrandLinkContainer, NavBar, NavbarContainer, NavbarLinkComponent } from './styledComponents';
import Brand from '@/genericComponent/Header/Public/stylecomponent';

export default function ProtectedHeader() {
    return (
        // TODO: Add padding of 8px
        <NavbarContainer>
            {/*  */}
            <NavBar>
                <BrandLinkContainer href="/" text="siNUsoid" />
          {PROTECTEDNAVBARITEMARRAY.map((item, idx) => (
            <NavbarLinkComponent key={idx} href={item.href} text={item.title} />
          ))}
        </NavBar>
      </NavbarContainer>
    );
}
