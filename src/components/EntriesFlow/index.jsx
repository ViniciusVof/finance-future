/* eslint-disable react/prop-types */
import { useState } from 'react';

import * as I from '@ant-design/icons';
import * as A from 'antd';
import dayjs from 'dayjs';
import propTypes from 'prop-types';

import * as S from './styles';

export function EntriesFlow({ data, type, handleRealize, handleEdit }) {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <>
      <S.HeaderNavigation>
        <A.Button
          type="secondary"
          icon={<I.LeftOutlined />}
          onClick={() => {
            setSelectedDate(selectedDate.subtract(1, 'month'));
          }}
        />
        <A.Typography.Title level={5}>
          {selectedDate.format('MMMM [de] YYYY')}
        </A.Typography.Title>
        <A.Button
          type="secondary"
          icon={<I.RightOutlined />}
          onClick={() => {
            setSelectedDate(selectedDate.add(1, 'month'));
          }}
        />
      </S.HeaderNavigation>

      <A.List
        itemLayout="horizontal"
        locale={{ emptyText: 'Nenhum lançamento encontrado' }}
        dataSource={data
          .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
          .filter(
            item =>
              dayjs(item.dueDate, 'DD/MM/YYYY').format('MM/YYYY') ===
              dayjs(selectedDate, 'DD/MM/YYYY').format('MM/YYYY')
          )}
        renderItem={item => (
          <A.List.Item
            actions={[
              <A.Button
                type="secondary"
                icon={item.realize ? <I.LikeFilled /> : <I.LikeOutlined />}
                onClick={() =>
                  handleRealize(item.id, !item.realize, item.dueDate)
                }
              />,
              <A.Button
                type="secondary"
                icon={<I.EditOutlined />}
                onClick={() => handleEdit(item)}
              />,
            ]}
          >
            <S.WrapperItemList>
              <S.Indicator type={type} />
              <S.ItemTitle>
                {item.title}
                <S.ItemDueDate>vencimento em {item.dueDate}</S.ItemDueDate>
              </S.ItemTitle>
              <S.WrapperOtherItems>
                <S.ItemCategory>{item.category}</S.ItemCategory>
                <S.ItemAmount>
                  {Number(item.amount).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                  <S.ItemAccount>em {item.bankAccount}</S.ItemAccount>
                </S.ItemAmount>
              </S.WrapperOtherItems>
            </S.WrapperItemList>
          </A.List.Item>
        )}
      />
    </>
  );
}
EntriesFlow.defaultProps = {
  type: null,
};
EntriesFlow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: propTypes.array.isRequired,
  type: propTypes.string,
};
