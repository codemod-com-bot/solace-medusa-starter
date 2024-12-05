import { useTranslation } from "react-i18next";
import { Metadata } from 'next'

import { Button } from '@modules/common/components/button'
import { Heading } from '@modules/common/components/heading'
import LocalizedClientLink from '@modules/common/components/localized-client-link'
import { Text } from '@modules/common/components/text'

export const metadata: Metadata = {
  title: '404',
  description: 'Something went wrong',
}

export default function NotFound() {
const { t } = useTranslation();

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-6">
      <Text className="text-5xl font-semibold small:text-4xl">404</Text>
      <Heading className="text-5xl small:text-4xl" as="h1">{t('page-not-found')}</Heading>
      <Text className="text-secondary" size="md">{t('sorry-page-not-found')}</Text>
      <Button asChild>
        <LocalizedClientLink href="/">{t('go-to-homepage')}</LocalizedClientLink>
      </Button>
    </div>
  )
}
