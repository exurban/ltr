const features = [
  {
    name: 'Developers',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'Product Owners',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    name: 'Scrum Masters',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Stakeholders',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
]

export default function UseCasesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-rose-600">
            Use Cases
          </h2>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            All-in-one platform
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            Left to Right is built to meet the needs of the entire team.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-neutral-900 dark:text-neutral-100">
                {feature.name}
              </dt>
              <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
