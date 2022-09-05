import PageContainer from '@/components/common/PageContainer/PageContainer';
import ProductDetail from '@/components/ProductDetail/ProductDetail';
import React from 'react';

export default function ProductDetailPage() {
  return (
    <PageContainer as="space">
      <ProductDetail />
    </PageContainer>
  );
}
