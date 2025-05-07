'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { Button } from '@galleo/ui/components/base/button'

interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  baseUrl: string
  pageParam: string
}

export function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  baseUrl,
  pageParam,
}: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center gap-2 mt-8">
      <Button
        variant="outline"
        onClick={() => {
          router.push(
            `${baseUrl}?${createQueryString(pageParam, String(currentPage - 1))}`
          )
        }}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span className="flex items-center px-4">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        onClick={() => {
          router.push(
            `${baseUrl}?${createQueryString(pageParam, String(currentPage + 1))}`
          )
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  )
} 