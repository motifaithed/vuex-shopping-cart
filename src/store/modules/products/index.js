import getters from './getters';

const productsModule = {
 
        namespaced: true,
        state(){
            return {
                products: [
                    {
                      id: 'p1',
                      image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                      title: 'Book Collection',
                      description:
                        'A collection of must-read books. All-time classics included!',
                      price: 99.99,
                    },
                    {
                      id: 'p2',
                      image:
                        'https://media.istockphoto.com/photos/view-from-tent-to-the-mountain-sport-and-active-life-concept-picture-id865700880?k=20&m=865700880&s=170667a&w=0&h=8ki0yJQD8i_Vl-c3dDUcIEyn6evGheE4oNT8RfHcMOE=',
                      title: 'Mountain Tent',
                      description: 'A tent for the ambitious outdoor tourist.',
                      price: 129.99,
                    },
                    {
                      id: 'p3',
                      image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                      title: 'Food Box',
                      description:
                        'May be partially expired when it arrives but at least it is cheap!',
                      price: 6.99,
                    },
                  ],
            }
        },
        getters:getters
   
}

export default productsModule;