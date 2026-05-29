'use client'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto pt-12 px-4 pb-12">
        <h1 className="text-4xl font-bold text-frsc-primary mb-12">Contact & Support</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-frsc-primary mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your message here..."
                  className="w-full min-h-32"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-frsc-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-frsc-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-frsc-primary mb-3">Call Us</h3>
              <p className="text-gray-600">
                <strong>Emergency Hotline:</strong><br />
                +234 (0) 8000FRSC (3772)
              </p>
              <p className="text-gray-600 mt-3">
                <strong>General Inquiries:</strong><br />
                +234 (0) 1 293 7778
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-frsc-primary mb-3">Email Us</h3>
              <p className="text-gray-600">
                <strong>Support:</strong><br />
                support@frsc.gov.ng
              </p>
              <p className="text-gray-600 mt-3">
                <strong>General:</strong><br />
                info@frsc.gov.ng
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-frsc-primary mb-3">Visit Us</h3>
              <p className="text-gray-600">
                Headquarters<br />
                FRSC Office<br />
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-frsc-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-semibold text-gray-900 mb-2">How long does license verification take?</h4>
              <p className="text-gray-600">License verification is instant. You'll get results immediately after submission.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept bank transfers, debit cards, and mobile money payments.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-semibold text-gray-900 mb-2">How do I cancel an appointment?</h4>
              <p className="text-gray-600">You can cancel appointments through your account portal or by calling our hotline.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is my information secure?</h4>
              <p className="text-gray-600">Yes, we use industry-standard encryption to protect your personal information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
