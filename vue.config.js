// vue-cli配置文件，90%的配置都是webpack的配置,要用commenjs的导出方式，node环境
module.exports = {
    devServer:{
        proxy:{
            //配置代理，凡是以/x开头的请求，进行网站域名代理
            "/x":{
                target:"https://api.bilibili.com",
                onProxyReq(proxyReq){
                    //设置消息头
                    proxyReq.setHeader("origin", "https://www.bilibili.com");
                    proxyReq.setHeader("referer", "https://www.bilibili.com/");
                }
            } 
        }
    }
}