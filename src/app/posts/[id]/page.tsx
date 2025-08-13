'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { getPost } from '@/lib/api';
import Button from '@/components/ui/Button';
import BasePageLayout from "@/components/layout/BasePageLayout";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorState from "@/components/ui/ErrorState";
import Breadcrumb from "@/components/layout/Breadcrumb";
import DetailContent from "@/components/DetailContent";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const BACK_TO_POSTS_TEXT = "Zpět na články";
const POSTS_LABEL = "Články";

export default function PostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const postId = parseInt(params.id as string);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const {
    data: post,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
    enabled: !isNaN(postId),
  });

  const handleGoBack = () => {
    router.back();
  };

  const getHeroTitle = () => {
    if (isNaN(postId)) return "Neplatné ID článku";
    if (isLoading) return "Načítání...";
    if (error) return "Chyba při načítání";
    if (!post) return "Článek nenalezen";
    return post.title;
  };

  const getBreadcrumbItems = () => {
    if (isNaN(postId) || isLoading || error || !post) {
      return [
        { label: POSTS_LABEL, href: "/" },
        { label: "Detail", isCurrent: true }
      ];
    }
    return [
      { label: POSTS_LABEL, href: "/" },
      { label: post.title, isCurrent: true }
    ];
  };

  return (
    <BasePageLayout heroTitle={getHeroTitle()}>
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between items-center">
          <Breadcrumb items={getBreadcrumbItems()} />
          <Link href="/">
             <Button variant="primary" size="sm">
              {isMobile ? (
                <ArrowLeftIcon className="w-4 h-4" />
              ) : (
                BACK_TO_POSTS_TEXT
              )}
            </Button>
          </Link>
        </div>

        {isNaN(postId) && (
          <ErrorState
            title="Neplatné ID článku"
            showBackButton
            backText={BACK_TO_POSTS_TEXT}
            onBack={handleGoBack}
          />
        )}

        {isLoading && (
          <LoadingSpinner message="Načítání článku..." />
        )}

        {error && (
          <ErrorState
            title="Chyba při načítání článku"
            message={error.message}
            onRetry={() => refetch()}
            showBackButton
            backText={BACK_TO_POSTS_TEXT}
            onBack={handleGoBack}
          />
        )}

        {!isLoading && !error && !post && (
          <ErrorState
            title="Článek nebyl nalezen"
            showBackButton
            backText={BACK_TO_POSTS_TEXT}
            onBack={handleGoBack}
          />
        )}

        {!isLoading && !error && post && (
          <DetailContent post={post} />
        )}
      </div>
    </BasePageLayout>
  );
}
