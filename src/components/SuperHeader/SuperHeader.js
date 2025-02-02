import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage className="hide">
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput className="hide" />
      <HelpLink href="/help" className="hide">
        Help
      </HelpLink>
      <UnstyledButton className="hide">
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--gray-300);
  background-color: var(--gray-900);
  height: 5px;
  padding-left: 32px;
  padding-right: 32px;

  .hide {
    display: none;
  }

  @media ${QUERIES.desktopAndUp} {
    height: 40px;
    .hide {
      display: initial;
    }
  }
`;

const MarketingMessage = styled.span`
  color: var(--white);
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
