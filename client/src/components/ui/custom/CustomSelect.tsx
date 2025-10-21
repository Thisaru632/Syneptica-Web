"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ListFilter
} from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/constants/products";

interface CustomSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
}

export default function CustomSelect({ value, onValueChange }: CustomSelectProps) {
  // Convert the activeCategory (label) to value for the select
  const getValueFromLabel = (label: string): string => {
    const category = PRODUCT_CATEGORIES.find(cat => cat.label === label);
    return category ? category.value : PRODUCT_CATEGORIES[0].value;
  };

  const selectedValue = value ? getValueFromLabel(value) : PRODUCT_CATEGORIES[0].value;

  const handleValueChange = (newValue: string) => {
    onValueChange?.(newValue);
  };

  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[150px] h-[50px] rounded-none text-white">
        <div className="flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4">
          <ListFilter className="w-4 h-4 text-white" />
          <SelectValue placeholder="Select category" />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-darkBg">
        <SelectGroup>
          {PRODUCT_CATEGORIES.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              <div className="flex items-center gap-2 text-base text-white">
                {category.label}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}