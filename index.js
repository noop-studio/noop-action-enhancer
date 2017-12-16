const actionEnhancer = (store) => {
    return (next) => {
        return (action) => {
            if (action instanceof Function) {
                return action(store.dispatch)
            }

            return next(action)
        }
    }
}

export default actionEnhancer
