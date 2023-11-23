import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useItemQuery } from '@/api/hooks/item';
import { PageLayout, PageType } from '@/module/auth/common';
import { Loader } from '@/module/common/component';
import { Category } from '@/module/common/constants';
import { useConnectionSocket } from '@/module/common/hooks';
import { DivCommon, TitleCommon } from '@/module/common/styles';
import { CardItem } from '@/module/item/page/card/card-item';
import { CreateItem } from '@/module/item/page/create/create-item';
import { COLORS, FONTS, SPACES } from '@/theme';

import * as Styled from './home-layout.styled';

const tabs = ['All', ...Category];

export const HomeLayout = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const page = (searchParams.get('page') as PageType) ?? 'Marketplace';

  const [tab, setTab] = useState('All');
  const [itemPage, setItemPage] = useState(1);

  const onSetTab = (str: string) => {
    setTab(str);
  };

  const { socket } = useConnectionSocket();

  const { isLoading, data } = useItemQuery.getAll({
    page: itemPage,
    category: tab === 'All' ? '' : tab
  });

  const onSetItemPage = () => {
    setItemPage((prev) => ++prev);
  };

  return (
    <PageLayout>
      {page === 'Marketplace' ? (
        <Styled.Container>
          <TitleCommon
            fw={FONTS.WEIGHTS.bold}
            fs={FONTS.SIZES.xxxxxxxl}
            mt={SPACES.xxxxl}
            ta='center'
          >
            Marketplace
          </TitleCommon>
          <Styled._SubTitleCommon ta='center'>
            Buy and sell NFTs from the world’s top artistsBuy and sell NFTs from
          </Styled._SubTitleCommon>

          <DivCommon fd='row' gap={SPACES.m} jc='center' margin={`${SPACES.xxxxxxl_} 0`}>
            {tabs.map((v, i) => (
              <Styled.Tab
                className={tab === v && 'is_active'}
                key={i}
                onClick={onSetTab.bind(this, v)}
              >
                {v}
              </Styled.Tab>
            ))}
          </DivCommon>

          <Styled.ItemContainer
            padding='0'
            margin={data?.count === data?.items.length ? `${SPACES.xxxxxxl_} 0 !important` : ''}
          >
            {isLoading ? (
              <Loader size='medium' height='auto' margin='20%' color={COLORS.purple} />
            ) : null}

            {data?.items.map((item, index) => (
              <CardItem item={item} key={index} socket={socket} />
            ))}

            {data?.count !== data?.items.length && (
              <DivCommon width='100%' margin='60px 0' ai='flex-end'>
                <Styled.LoadMore onClick={onSetItemPage}>Load More</Styled.LoadMore>
              </DivCommon>
            )}
          </Styled.ItemContainer>
        </Styled.Container>
      ) : null}

      {page === 'Create' ? <CreateItem socket={socket} /> : null}
    </PageLayout>
  );
};
