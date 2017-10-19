import store from './store'

export function getCampaignModel() {
  return store.getState().campaignReducer.campaign;
}

export function getClientModel() {
  return store.getState().clientReducer.client;
}

export function getActionModuleModel() {
  return store.getState().actionModuleReducer.actionModule;
}

export function getEditModuleModel() {
  return store.getState().editModuleReducer.editModule;
}

export function getBroadcastModel() {
    return store.getState().broadcastReducer.broadcast;
}

export function getEditBroadcastModel() {
  return store.getState().editBroadcastReducer.editBroadcast;
}

export function getBroadcastTargetModel() {
  return store.getState().broadcastTargetReducer.broadcastTarget;
}

export function getOptionPanelModel() {
  return store.getState().optionPanelReducer.optionPanel;
}

export function getDailyDealsModel() {
  return store.getState().dailyDealsReducer.dailyDeals;
}

export function getFbInfoModel() {
  return store.getState().fbInfoReducer.fbInfo;
}
