'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import { Button } from '@galleo/ui/components/base/button'
import { Input } from '@galleo/ui/components/base/input'

interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  baseUrl: string
  pageParam: string
  category: string
}

export function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  baseUrl,
  pageParam,
  category,
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

  const categoryPage = Number(searchParams[`categoryPage-${category}`]) || 1;

  if (totalPages <= 1) return null

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          router.push(
            `${baseUrl}?${createQueryString(pageParam, String(currentPage - 1))}`
          )
        }}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {getPageNumbers().map((pageNum) => (
        <Button
          key={pageNum}
          variant={currentPage === pageNum ? "default" : "outline"}
          size="sm"
          onClick={() => {
            router.replace(
              `${baseUrl}?${createQueryString(pageParam, String(pageNum))}`,
              { scroll: false }
            )
          }}
        >
          {pageNum}
        </Button>
      ))}

      <Button
        variant="outline"
        size="sm"
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