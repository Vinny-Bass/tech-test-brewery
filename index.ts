
function calcArea(firstBuildIndex: number, secondBuildIndex: number, height: number[])
{
    const first = height[firstBuildIndex];
    const last = height[secondBuildIndex];
    const width = secondBuildIndex - firstBuildIndex;
    return width * Math.min(first, last);
}

export function maxArea(height: number[]): number {
    if (height.length === 0) return 0;
    let i = 0;
    let j = height.length - 1;
    let maxArea = 0;

    while (i < j)
    {
        const currentArea = calcArea(i, j, height);
        maxArea = Math.max(currentArea, maxArea);
        if (height[i] < height[j]) 
            i++;
        else
            j--;
    }
    return maxArea;
}