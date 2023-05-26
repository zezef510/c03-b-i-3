function  check (str1 , str2){
    let dp = []
    for (let i = 0; i < str1.length; i++) {
        dp[i] += []

    for (let j = 0; j < str2.length; j++) {
        dp[j][j] = 0
        }
    }
    let maxLength = 0
    let end = 0
    for (let i = 0; i <= str1.length; i++) {
        for (let j = 0; j <= str2.length; j++) {
            if (str1[i-1]== str2[j-1]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if(dp[i][j] > maxLength){
                    maxLength = dp[i][j]
                    end = i
                }
            }else {
                dp[i][j]= 0
            }
        }
    }
    if(maxLength == 0){
        return ""
    }
    else {
        return str1.substring(end-maxLength,end)
    }
}