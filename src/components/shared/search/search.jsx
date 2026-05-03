import {Label, SearchField} from "@heroui/react";

export function Basic() {
  return (
    <SearchField name="search">
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-70" placeholder="Search books by title..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
}