import PCA from 'ml-pca';

interface Point {
  x: number;
  y: number;
}

/**
 * 使用 PCA 降维 Gemini embeddings 并转换为 Recharts 散点图格式
 * @param embeddings Gemini embeddings 数组
 * @param dimensions 降维后的维度，默认为 2
 * @returns Recharts 散点图格式的数据
 */
export function reduceEmbeddings(embeddings: number[][], dimensions: number = 2): Point[] {
  if (!embeddings || embeddings.length === 0) {
    return [];
  }

  const pca = new PCA(embeddings);
  const reducedData = pca.predict(embeddings, { nComponents: dimensions });

  const points: Point[] = reducedData.to2DArray().map((row: number[]) => ({
    x: row[0],
    y: row[1],
  }));

  return points;
}
