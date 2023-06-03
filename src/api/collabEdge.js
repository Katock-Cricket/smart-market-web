import request from '@/utils/request'

export function getOverView() {
  return request({
    url: '/get-overview',
    method: 'post',
  })
}

export function getNodesName() {
  return request({
    url: '/get-nodes',
    method: 'post'
  })
}

export function getNodePurchase(data) {
  return request({
    url: '/node-purchase',
    method: 'post',
    data
  })
}

export function getShopList() {
  return request({
    url: '/get-shop-list',
    method: 'post'
  })
}

export function getNodeList() {
  return request({
    url: '/get-node-list',
    method: 'post'
  })
}

export function addNode(data) {
  return request({
    url: '/add-node',
    method: 'post',
    data
  })
}

export function openNode(data) {
  return request({
    url: '/open-node',
    method: 'post',
    data
  })
}

export function closeNode(data) {
  return request({
    url: '/close-node',
    method: 'post',
    data
  })
}
