import React, { useState } from "react";
import Background from "../../Reusables/Background/Background";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Color } from "../../Defaults/Color";
import Nav from "../../Reusables/Nav/Nav";
import { TopView } from "../../Reusables/Nav/TopView";
import { IconContainer } from "../../Reusables/Nav/IconContainer";
import TitleNav from "../../Reusables/Nav/TitleNav";
import Logo from "../../Reusables/Logo/Logo";
import SearchBar from "../../Reusables/SearchBar";
import { useDispatch } from "react-redux";
import { ActiveView } from "../../Store/ActiveViews";
import ListMyProducts from "./ListMyProducts/ListMyProducts";
import OrderBy from "./OrderBy/OrderBy";
import MaxWidthContainer from "../../Reusables/MaxWidthContainer";

export default function MyProducts() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  function backToHomeHandler() {
    dispatch(ActiveView.actions.setView("Home"));
  }

  function getSearchQuery(query) {
    setQuery(query);
  }

  return (
    <Background>
      <MaxWidthContainer>
        <Nav>
          <TopView>
            <IconContainer onPress={backToHomeHandler}>
              <FontAwesome
                name="angle-left"
                size={35}
                color={Color.black}
              ></FontAwesome>
            </IconContainer>
            <TitleNav>Meus Produtos</TitleNav>
            <Logo />
          </TopView>
          <SearchBar
            placeholder="Buscar pelo nome"
            parentLiftText={getSearchQuery}
          />
        </Nav>
        <OrderBy></OrderBy>

        <ListMyProducts query={query} />
      </MaxWidthContainer>
    </Background>
  );
}
