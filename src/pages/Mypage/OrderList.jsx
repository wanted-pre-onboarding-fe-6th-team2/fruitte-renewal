import PageContainer from '@/components/common/Page/PageContainer';
import OrderListForm from '@/components/myPage/OrderList/OrderListForm';
import React from 'react';

export default function OrderList() {
  return (
    <PageContainer as="space">
      <OrderListForm />
    </PageContainer>
  );
}
