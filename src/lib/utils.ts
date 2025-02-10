import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getEverBalance = async (address: string): Promise<string> => {
  try {
    // TODO: Implement actual EVER balance fetching logic here
    // This should integrate with EVER wallet or blockchain API
    const response = await fetch(`https://api.everscale.network/v1/accounts/${address}/balance`);
    const data = await response.json();
    return (Number(data.balance) / 1e9).toFixed(2); // Convert from nanoEVERs to EVERs
  } catch (error) {
    console.error('Error fetching EVER balance:', error);
    return '0.00';
  }
}
