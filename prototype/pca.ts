import { PCA } from 'ml-pca';

interface Point {
  value: [number, number];
}

/**
 * 使用 PCA 降维 Gemini embeddings 到二维，并整理为 recharts 散点图格式。
 *
 * @param embeddings Gemini embeddings 数组。
 * @returns recharts 散点图格式的数据。
 */
export function reduceEmbeddingsToScatterData(embeddings: number[][]): Point[] {
  if (!embeddings || embeddings.length === 0) {
    return [];
  }

  const pca = new PCA(embeddings, { nPcs: 2 });
  const reducedData = pca.predict(embeddings).to2DArray();

  const scatterData: Point[] = reducedData.map((row) => ({
    value: [row[0], row[1]],
  }));

  return scatterData;
}
