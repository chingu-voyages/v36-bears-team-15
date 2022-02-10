import * as S from './styles';
import StyledLink from '../StyledLink';
import React from "react";
import {useEffect, useState} from "react";


export default function Todo() {
  return (
    <div>
      <S.WhiteWrapper>
      <StyledLink href="/" label="< Home" />
      </S.WhiteWrapper>
    </div>
  )
};


