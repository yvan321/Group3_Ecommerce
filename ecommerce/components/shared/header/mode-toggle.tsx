'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';

import styles from '@/assets/styles/modeToggle.module.css';

const themes = [
  { key: 'system', label: 'System', icon: SunMoon },
  { key: 'dark', label: 'Dark', icon: MoonIcon },
  { key: 'light', label: 'Light', icon: SunIcon },
];

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = useCallback(
    (key: string) => {
      setTheme(key);
      setIsRotating(true);
    },
    [setTheme]
  );

  // Remove rotation class after animation completes
  const handleAnimationEnd = () => {
    setIsRotating(false);
  };

  if (!mounted) return null;

  const CurrentIcon =
    themes.find((t) => t.key === theme)?.icon || SunMoon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          aria-label="Toggle theme"
          className={`${styles.button} ${isRotating ? styles.rotate : ''}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <CurrentIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={styles.dropdownContent}>
        <DropdownMenuLabel className={styles.dropdownLabel}>
          Appearance
        </DropdownMenuLabel>
        <DropdownMenuSeparator className={styles.dropdownSeparator} />
        {themes.map(({ key, label }) => (
          <DropdownMenuCheckboxItem
            key={key}
            checked={theme === key}
            onSelect={() => handleChange(key)}
          >
            {label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
