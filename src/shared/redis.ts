import { createClient, SetOptions } from "redis";
import { logger } from "./logger";
import config from "../config";


const redisClient = createClient({
    url: config.redis.url
})

const redisPubClient = createClient({
    url: config.redis.url
})

const redisSubClient = createClient({
    url: config.redis.url
})



redisClient.on('error', (err)=> logger.error('RedisError', err))
redisClient.on('connect', (err)=> logger.info('redis connected'))

const connect = async (): Promise<void>=> {
   await redisClient.connect();
   await redisPubClient.connect();
   await redisSubClient.connect();
}

const set = async(key:string,value:string,options?: SetOptions): Promise<void> => {
    await redisClient.set(key,value,options)
}

const get = async(key:string): Promise<string | null> => {
    return await redisClient.get(key)
}

const del = async(key:string): Promise<void> => {
     await redisClient.del(key)
}

const setAccessToken = async(userId:string,token:string): Promise<void> => {
    const key = `access-token${userId}`;
    await redisClient.set(key,token, {EX: Number(config.redis.redisTokenExpireIn)})
}

const getAccessToken = async(userId:string): Promise<string|null> => {
    const key = `access-token${userId}`;
    return await redisClient.get(key)
}


const deleteAccessToken = async(userId:string): Promise<void> => {
    const key = `access-token${userId}`;
    await redisClient.del(key)
}



const disconnect = async (): Promise<void> =>{
    await redisClient.quit()
    await redisPubClient.quit()
    await redisSubClient.quit()
}



export const RedisClient = {
    connect,
    get,
    set,
    del,
    disconnect,
    setAccessToken,
    getAccessToken,
    deleteAccessToken,
    publish: redisPubClient.publish.bind(redisPubClient),
    subscribe: redisPubClient.subscribe.bind(redisPubClient),
}