export type ForgeUIUploadedAsset = {
  id: string
  name: string
  type: string
  size: number
  file: File
  createdAt: number
}

let forgeUIUploadedAssets: ForgeUIUploadedAsset[] = []

export function forgeUIGetUploadedAssets() {
  return forgeUIUploadedAssets
}

export function forgeUIAddUploadedAssets(
  assets: ForgeUIUploadedAsset[],
) {
  forgeUIUploadedAssets = [
    ...forgeUIUploadedAssets,
    ...assets,
  ]

  return forgeUIUploadedAssets
}

export function forgeUIDeleteUploadedAsset(id: string) {
  forgeUIUploadedAssets = forgeUIUploadedAssets.filter(
    asset => asset.id !== id,
  )

  return forgeUIUploadedAssets
}