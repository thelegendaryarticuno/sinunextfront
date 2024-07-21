import { brandImgLink } from '@/constants/headerConstants';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const BrandLogo = styled.img`
height: 40px;
    /* Add your custom styles here */
`;

const BrandName = styled.h1`
    font-size: 24px;
    color: #333;
    /* Add your custom styles here */
`;

export const NavbarBrandBar: React.FC = () => {
    return (
      <div className='flex'>
        <Link href="/">
          <BrandLogo src={brandImgLink} alt="Logo" />
          {/* <div className="text-lg font-bold">siNUsoid</div> */}
          <BrandName>Brand Name</BrandName>
        </Link>
      </div>
    );
};

