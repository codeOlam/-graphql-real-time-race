export default function Home() {
  return (
    <>
      <header>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-tight text-gray-900">
            Home
          </h2>
        </div>
      </header>
      <main>
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="overflow-hidden border-4 border-gray-200 border-dashed rounded-lg h-96">
              <img
                className="object-cover object-center w-full h-full"
                alt="racing car"
                src="https://images.unsplash.com/photo-1505739679850-7adc7776516b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
            </div>
            <div className="mt-8 space-y-4">
              <p>
                In this workshop we'll build a fully functioning application for
                our fast-paced sports event called the GraphQL Real-time Race.
                We'll demonstrate how to create a serverless web application
                that delivers real-time data to fans based on their location,
                event scoring, and event updates. By going through this workshop
                you'll gain a solid understanding of how to connect the
                front-end of your application to a robust, performant
                cloud-enabled backend that delivers real-time updates.
              </p>
              <p>
                We'll provide practical hands-on experience on how to easily
                create a back-end with sophisticated functionality such as
                GraphQL, subscriptions and location awareness. As you complete
                each lap you'll gain additional knowledge on how to integrate
                real-time data in your apps. Your day at the races will increase
                the speed and fun as you develop your future applications.
                &nbsp;
                <span className="font-bold text-aurora">
                  Now, off to the races!
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
