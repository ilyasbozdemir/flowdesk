import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      aiGenerate: (options: { prompt: string; systemInstruction?: string }) => Promise<{ success: boolean; data?: string; error?: string }>
      aiTest: (provider: string, apiKey: string) => Promise<{ success: boolean; data?: string; error?: string }>
      getUpdateConfig: () => Promise<{ success: boolean; owner?: string; repo?: string; error?: string }>
    }
  }
}
