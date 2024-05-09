"use client"

import { Ban } from "@/types/Ban"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Ban>[] = [
  {
    accessorKey: "nick",
    header: "Nick",
  },
  {
    accessorKey: "steamID",
    header: "SteamID",
  },
  {
    accessorKey: "reason",
    header: "Powód",
  },
  {
    accessorKey: "date",
    header: "Data wykoniania",
  },
]
