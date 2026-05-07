'use client'
import {SearchField} from "@heroui/react";

export function Basic({setSearch,search}) {
  return (
    <SearchField name="search" value={search} onChange={setSearch}>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-70" placeholder="Search books by title..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
}